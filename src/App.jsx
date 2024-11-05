import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import  {CurricularGrid}  from "./CurricularGrid";

export default function App() {
  return (
    <MantineProvider>
      <CurricularGrid/>
    </MantineProvider>
  );
}
