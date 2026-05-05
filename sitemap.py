import os
import re
from pathlib import Path
from datetime import datetime

if __name__ == "__main__":
    try:
        src = Path("./src/App.jsx").absolute()
        dst = Path("./public/sitemap.xml").absolute()

        with open(str(src), "r") as f:
            script = f.read()
        paths = re.findall(r'path="([^"]*)"', script)

        if dst.exists():
            os.remove(str(dst))

        curr_datetime = datetime.today().strftime('%Y-%m-%d')
        paths_count = len(paths)
        exclude = ["login", "admin", "*", "newsletter"]
        with open(str(dst), "w") as f:
            f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
            f.write('\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
            for i, path in enumerate(paths):
                c = False
                for e in exclude:
                    if e in path:
                        c = True

                if c or ":" in path:
                    continue
                f.write('\n\t<url>\n')
                f.write(f'\t\t<loc>https://www.cometfallpress.com/{path}</loc>\n')
                f.write(f'\t\t<lastmod>{curr_datetime}</lastmod>\n')
                f.write('\t\t<changefreq>weekly</changefreq>\n')
                f.write(f'\t\t<priority>{max(0.5, 1-(i*0.1)):.1f}</priority>\n')
                f.write('\t</url>\n')
            f.write('\n</urlset>')

    except (Exception,) as e:
        print(f"An exception occurred while trying to generate the sitemap: {e}")
        exit(-1)
    print("Sitemap generated.")
    exit(0)