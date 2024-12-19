import RootLayout from "@/app/layout";
import './global.css'
import MenuBar from "@/components/MenuBar/page";
import Box from "@mui/material/Box";

export default function Home() {
  return (
      <RootLayout>
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{backgroundColor: '#FAF7F0'}}>
              <MenuBar />
              <Box display="flex" flexDirection="row">
                  <Box>
                      <div>Welcome to my cozy little nook on the internet!</div>
                      <p>Here, you’ll stumble upon my CV, a roadmap of my escapades
                          as a software developer sprinkled with tales of my geeky deep
                          dives into shiny new programming tech and cybersecurity. </p>
                      <p>Because life isn’t all code, you’ll also find stories from my travel adventures.</p>
                      <p>Therefore, this site is a blending of professional growth with my wanderlusts. </p>
                  </Box>
                  <Box sx={{width:'2rem', height:'2rem'}}>
                        <div>Image</div>
                  </Box>
              </Box>
          </Box>
      </RootLayout>
  );
}
