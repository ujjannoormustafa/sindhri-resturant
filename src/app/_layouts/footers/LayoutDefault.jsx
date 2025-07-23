"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
        {/* footer */}
        <footer>
            <div className="container">
                <div className="sb-footer-frame">
                    <Link href="/" className="sb-logo-frame">
                        {/* logo img */}
                        {/* <img src={AppData.header.logo.image} alt={AppData.header.logo.alt} /> */}
                        <div className="sb-text-logo" style={{ textAlign: 'center' }}>
                            <h6 className="sb-logo-title" style={{ fontSize: '28px', fontWeight: '600', margin: '0', lineHeight: '1.2', color: '#ffffff' }}>Sindhri</h6>
                            <p className="sb-logo-subtitle" style={{ fontSize: '16px', margin: '0', lineHeight: '1.2', color: '#cccccc', textTransform: 'lowercase' }}>Restaurant</p>
                        </div>
                    </Link>
                    <ul className="sb-social">
                        {AppData.social.map((item, key) => (
                        <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank" title={item.title}><i className={item.icon}></i></a></li>
                        ))}
                    </ul>
                    <div className="sb-copy">{AppData.footer.copy}</div>
                </div>
            </div>
        </footer>
        {/* footer end */}
    </>
  );
};
export default DefaultFooter;
