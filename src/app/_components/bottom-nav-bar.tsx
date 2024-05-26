import Link from "next/link";
import cocktailIcon from "../../../public/icons8-cocktail-48.png";
import mixingIcon from "../../../public/icons8-cocktail-shaker-64.png";

export default async function BottomNavBar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: 120,
        color: "white",
        position: "fixed",
        bottom: 0,
        width: "100vw",
      }}
    >
      <div
        style={{
          height: 2,

          background:
            "linear-gradient(90deg, rgba(77,58,32,1) 0%, rgba(212,167,89,1) 50%, rgba(77,58,32,1) 100%)",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 70,
          paddingRight: 70,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Link
          href="/cocktails"
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#d4a059",
            fontSize: 12,
            fontWeight: 300,
          }}
        >
          <img src={cocktailIcon.src} style={{ height: 50, width: 50 }} />
          <span>Cocktails</span>
        </Link>
        <Link
          href="/ingredients"
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#d4a059",
            fontWeight: 300,
            fontSize: 12,
            justifyContent: "center",
          }}
        >
          <img src={mixingIcon.src} style={{ height: 50, width: 50 }} />
          <span>Ingredients</span>
        </Link>
        <Link
          href="/cocktails"
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#d4a059",
            fontWeight: 300,
            fontSize: 12,
            alignItems: "center",
          }}
        >
          <img src={cocktailIcon.src} style={{ height: 50, width: 50 }} />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}
