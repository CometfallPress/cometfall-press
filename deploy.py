import os
import git
import sys
import shutil
from dotenv import load_dotenv
from pathlib import Path

def recursive_copy(src: Path, dst: Path):
	dst.mkdir(parents=True, exist_ok=True)
	pth: Path
	for pth in src.iterdir():
		target = dst / pth.name
		if pth.is_dir():
			if target.exists():
				shutil.rmtree(target)
			target.mkdir(parents=True, exist_ok=True)
			recursive_copy(pth, target)
		else:
			if target.exists():
				target.unlink()
			shutil.copy2(pth, target)
			print(f"Coppied file: {pth.name} to {target.parent}.")

if __name__=="__main__":
	try:
		load_dotenv("./.env")
		src_path = Path(os.getenv("SRC_PATH")).resolve()
		dist_path = ( src_path / "dist").resolve()
		build_path = Path(os.getenv("BUILD_PATH")).resolve()
		assets_path = (build_path / "assets").resolve()
		if assets_path.exists():
			shutil.rmtree(assets_path)
		recursive_copy(dist_path, build_path)

	except (Exception,) as e:
		print(f"An error occurred while copying the deploy files: {e}")
		sys.exit(-1)

	print("Successfully copied assets.")

	try:
		repo = git.Repo(str(build_path))
		repo.git.add(A=True)
		if repo.is_dirty(untracked_files=True):
			repo.index.commit("This commit was pushed by the automated deployment script.")
		branch = repo.active_branch.name
		result = repo.remote("origin").push(refspec=f"{branch}:{branch}")
		for item in result:
			print(item.summary)

	except (Exception,) as e:
		print(f"An error occurred while pushing the commit: {e}")
		sys.exit(-1)

	print("Repo updated.")
	sys.exit(0)