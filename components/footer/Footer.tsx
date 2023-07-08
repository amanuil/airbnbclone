import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";
type ColumnProps = {
  title: string;
  links: Array<string>;
};
function Footer() {
  const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
      <h4 className="font-semibold">Title</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className="flexStart footer">
      <div className="flex item-start flex-col">
        <Link href="/">[r_r]</Link>
      </div>
      <div className="flex flex-wrap gap-12">
        <FooterColumn
          title={footerLinks[0].title}
          links={footerLinks[0].links}
        />
        <div className="flex-1 flex flex-col gap-4">
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <FooterColumn
            title={footerLinks[2].title}
            links={footerLinks[2].links}
          />
        </div>
        <FooterColumn
          title={footerLinks[3].title}
          links={footerLinks[3].links}
        />
        <div className="flex-1 flex flex-col gap-4">
          <FooterColumn
            title={footerLinks[4].title}
            links={footerLinks[4].links}
          />
          <FooterColumn
            title={footerLinks[5].title}
            links={footerLinks[5].links}
          />
        </div>
        <FooterColumn
          title={footerLinks[6].title}
          links={footerLinks[6].links}
        />
      </div>
      <div className="flexBetween footer_copyright">
        <p>&copy; 2023 [r_r]. All rights reserved.</p>
        <p className="text-gray">
            <span className="text-bal">projects:</span>
            28
        </p>
      </div>
    </footer>
  );
}

export default Footer;
