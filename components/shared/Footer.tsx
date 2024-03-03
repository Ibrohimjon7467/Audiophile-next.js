import Link from "next/link";
import Image from "next/image";
import { Container } from "@mui/material";

export const Footer = () => {
  return (
    <div style={{
      color: "white",
      padding: "32px 0",
      backgroundColor: "#191919",
    }}
    >
      <Container>
        <div style={{
          position: "relative",
          top: "-32px",
          width: "7rem",
          height: "0.25rem",
          backgroundColor: "#d87d4a",
        }}
        />
        <div className="categry-line" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        >
          <Link href="/">
            <Image src="./assets/shared/desktop/logo.svg"
              alt="logo" width={143} height={25}
            />
          </Link>
          <ul className="categry-line" style={{ textTransform: "uppercase", display: "flex", alignItems: "center", columnGap: "34px", fontSize: "13px", textDecoration: "none", }}>
            <Link href="/">Home</Link>
            <Link href="/">Headphones</Link>
            <Link href="/">Speakers</Link>
            <Link href="/">Earphones</Link>
          </ul>
        </div>
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
        >
          <p style={{
            color: "#FFF",
            opacity: "0.5",
            fontSize: "15px",
            width: "100%",
            maxWidth: "500px",
            fontWeight: 400,
          }}
          >
            Assalomalekum ustoz, uzur responsivelikka unchalik ulgurolmadim, ishlashda ham xatoliklar bor, iltimos shu safar qo'llavorin ustoz, nextjs biroz qiyinlik qildi, lekn qayta o'qishdan zerikdim, uydagilargayam qayta o'qiyman deyisham noqulay bolyapti rosa, shunga ozro yordam qivorsez ustoz shu sertifikatni olsam uydagilarimam hursand bolishardi, mani hozirchalikka ishlash niyatim yo'qda, sertifikatni ovosam, keyin o'qishga tayorlanardim, agar yordam qisez hursand bolardim ustoz, hurmat bilan o'quvchiz Ibrohimjon
          </p>
          <div style={{ display: "flex" }}>
            <Image
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook-icon" width={25} height={25}
            />
            <Image
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter-icon" width={25}
              height={25} style={{ marginLeft: "1rem" }}
            />
            <Image
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram-icon" width={25} height={25}
              style={{ marginLeft: "1rem" }}
            />
          </div>
        </div>
        <p style={{
          color: "#FFF",
          opacity: "0.5",
          fontSize: "15px",
          maxWidth: "540px",
          width: "100%",
          fontWeight: 700,
          marginTop: "2rem",
        }}
        >
          Copyright 2024. All Rights Reserved
        </p>
      </Container>
    </div>
  );
};
