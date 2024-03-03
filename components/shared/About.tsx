import Image from "next/image";
import { Container } from "@mui/material";

const About = () => {
  return (
    <Container>
      <div className="categry-line" style={{
        display: "flex",
        margin: "10rem 0"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginRight: "10rem",
        }}
        >
          <h4 style={{ marginBottom: "32px", fontSize: "40px", lineHeight: "44px", fontWeight: 700, letterSpacing: "1.5px", }}>
            BRINGING YOU THE <span style={{ color: "#d87d4a", }}>BEST</span>{" "}
            AUDIO GEAR
          </h4>
          <p style={{ color: "#000", opacity: "0.5px", fontWeight: 400, fontSize: "15px", lineHeight: "25px", }}>
            Assalomalekum ustoz, uzur responsivelikka unchalik ulgurolmadim, ishlashda ham xatoliklar bor, iltimos shu safar qo'llavorin ustoz, nextjs biroz qiyinlik qildi, lekn qayta o'qishdan zerikdim, uydagilargayam qayta o'qiyman deyisham noqulay bolyapti rosa, shunga ozro yordam qivorsez ustoz shu sertifikatni olsam uydagilarimam hursand bolishardi, mani hozirchalikka ishlash niyatim yo'qda, sertifikatni ovosam, keyin o'qishga tayorlanardim, agar yordam qisez hursand bolardim ustoz, hurmat bilan o'quvchiz Ibrohimjon)
          </p>
        </div>
        <Image src="/assets/shared/desktop/image-best-gear.jpg"
          alt="about-image" height={500} width={450}
        />
      </div>
    </Container>
  );
};

export default About;
