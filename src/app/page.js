import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import bigcoffee from "@/app/assets/bigcoffee.png";
import smallcoffee from "@/app/assets/smallcoffee.png";
import img1 from "@/app/assets/img1.png";
import img2 from "@/app/assets/img2.png";
import img3 from "@/app/assets/img3.png";
import img4 from "@/app/assets/img4.png";
import img5 from "@/app/assets/img5.png";
import coffee_icon from "@/app/assets/favicon.png";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container_principal}>
        <div className={styles.container_textual}>
          <h1>
            Your coffee <br />
            Your vibe <br />
            Your energy <br />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget.
          </p>
          <Link className={styles.btn} href="/">
            <p>Explore</p>
          </Link>
        </div>
        <div className={styles.container_img}>
          <Image className={styles.bigcoffee} src={bigcoffee}></Image>
          <Image className={styles.smallcoffee} src={smallcoffee}></Image>
        </div>
      </div>
      <div className={styles.container_referencia}>
        <div className={styles.container_dark}>
          <div>
            <Image className={styles.img1} src={img1}></Image>
            <p>Et integer facilisi eget</p>
          </div>
          <div>
            <Image className={styles.img2} src={img2}></Image>
            <p>Et integer facilisi eget</p>
          </div>
          <div>
            <Image className={styles.img3} src={img3}></Image>
            <p>Et integer facilisi eget</p>
          </div>
          <div>
            <Image className={styles.img4} src={img4}></Image>
            <p>Et integer facilisi eget</p>
          </div>
          <div>
            <Image className={styles.img5} src={img5}></Image>
            <p>Et integer facilisi eget</p>
          </div>
        </div>
        <div className={styles.container_flutuante}>
          <div className={styles.metricas}>
            <div>
              <Image className={styles.coffee_icon} src={coffee_icon}></Image>
              <h2>190+</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div>
              <Image className={styles.coffee_icon} src={coffee_icon}></Image>
              <h2>123K</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div>
              <Image className={styles.coffee_icon} src={coffee_icon}></Image>
              <h2>58</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Desenvolvido por <span>Victoria Vivian</span></p>
      </footer>
    </main>
  );
}
