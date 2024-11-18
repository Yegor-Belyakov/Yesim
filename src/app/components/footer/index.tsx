import React from "react";
import styles from "./footer.module.scss";
import YesimLogoIcon from "@/app/icons/footer/YesimLogoIcon";
import AppleStoreIcon from "@/app/icons/footer/AppleStoreIcon";
import GoogleStoreIcon from "@/app/icons/footer/GoogleStoreIcon";
import FooterLinksBlockItem from "./components/footerLinksBlockItem";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerIconsBlockWrapper}>
        <div>
          <Link href="/">
            <YesimLogoIcon />
          </Link>
        </div>

        <div className={styles.footerStoresIconsWrapper}>
          <div>
            <Link
              target="_blank"
              href={
                "https://apps.apple.com/us/app/yesim-esim-virtual-2nd-line/id1458505230?mt=8"
              }
            >
              {" "}
              <AppleStoreIcon />
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              href={
                "https://yesim.onelink.me/9Kyt/eozn2aaa?af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.yesimmobile&af_ios_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.yesimmobile&utm_link=https%3A%2F%2Fyesim.tech%3Freferrer%3Dhttps%253A%252F%252Fwww.google.com%252F%26utm_medium%3Dorganic"
              }
            >
              {" "}
              <GoogleStoreIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerLinksBlockWrapper}>
        <div className={styles.footerLinksBlockTwoItemsWrapper}>
          <div className={styles.footerLinksBlockItem}>
            <FooterLinksBlockItem />
          </div>
          <div className={styles.footerLinksBlockItem}>
            <FooterLinksBlockItem />
          </div>
        </div>

        <div className={styles.footerLinksBlockItem}>
          <FooterLinksBlockItem />
        </div>
      </div>
    </div>
  );
}

export default Footer;
