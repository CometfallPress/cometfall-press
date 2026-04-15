import os
import git
import shutil
from dotenv import load_dotenv
from pathlib import Path

if __name__=="__main__":
	try:
		load_dotenv("./.env")
		dist_path = Path("./dist/").resolve()
		build_path = Path(os.getenv("BUILD_PATH")).resolve()
		assets_path = (build_path / "assets").resolve()
		shutil.rmtree(str(assets_path))
		shutil.copytree(str(dist_path), str(build_path), dirs_exist_ok=True)

	except (Exception,) as e:
		print(f"An error occurred while copying the deploy files: {e}")
		exit(-1)

	try:
		repo = git.Repo(str(build_path))
		repo.index.add(all=True)
		repo.index.commit("This commit was pushed by the automated deployment script.")
		repo.remote(name="origin").push(repo.head.ref)
	except (Exception,) as e:
		print(f"An error occurred while pushing the commit: {e}")
		exit(-1)

	exit(0)