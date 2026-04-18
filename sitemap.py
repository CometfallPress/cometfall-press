import os
import re
from pathlib import Path
from datetime import datetime

if __name__ == "__main__":
	try:
		src = Path("./src/main.jsx").absolute()
		dst = Path("./public/smap.xml").absolute()

		with open(str(src), "r") as f:
			script = f.read()
		paths = re.findall(r'path="([^"]*)"', script)

		if dst.exists():
			os.remove(str(dst))

		curr_datetime = datetime.today().strftime('%Y-%m-%d')
		paths_count = len(paths)
		with open(str(dst), "w") as f:
			f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
			f.write('\n\t<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
			for i, path in enumerate(paths):
				if path == "*" or ":" in path:
					continue
				f.write('\n\t\t<url>\n')
				f.write(f'\t\t\t<loc>https://cometfallpress.com/{path}/</loc>\n')
				f.write(f'\t\t\t<lastmod>{curr_datetime}</lastmod>\n')
				f.write('\t\t\t<changefreq>weekly</changefreq>\n')
				f.write(f'\t\t\t<priority>{max(0.5, 1-(i*0.1)):.1f}</priority>\n')
				f.write('\t\t</url>\n')
			f.write('\n\t</urlset>')

	except (Exception,) as e:
		print(f"An exception occurred while trying to generate the sitemap: {e}")
		exit(-1)
	print("Sitemap generated.")
	exit(0)