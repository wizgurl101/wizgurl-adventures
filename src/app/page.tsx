import RootLayout from "@/app/layout";
import './global.css'
import MenuBar from "@/components/MenuBar/page";

export default function Home() {
  return (
      <RootLayout>
          <MenuBar />
        <div>Home Page</div>
      </RootLayout>
  );
}
