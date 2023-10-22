import "./App.css";
import { CiSearch } from 'react-icons/ci';
import { RiMailOpenFill } from 'react-icons/ri';
import { SiTheconversation } from 'react-icons/si';
import { MdOutlineDisplaySettings } from 'react-icons/md';
import { MdOutlineAnalytics } from 'react-icons/md';
import { TfiLayers } from 'react-icons/tfi';
import { PiChatCenteredTextBold } from 'react-icons/pi';
import { TbChartDonut2 } from 'react-icons/tb';
import { LuSettings2 } from 'react-icons/lu';
import Content from "./content";

import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Conversions from "./conversions";
import Automations from "./automations";
import Campaigns from "./campaigns";
import Popup from "./popup";
import Live_Chat from "./live_Chat";
import Segments from "./segments";
import Integrations from "./integrations";


function App(){
  return(
    <body>
      <main>
      <aside>
        <div class="top_logo">
          <img src="logo.png" width="25px" height="25px"></img>
          <h3>BlueReceipt</h3>
        </div>
        <div>
        <CiSearch size="1.3rem" class="search_icon" />
        <input type="text" placeholder="Search..." class="search"></input><br></br><br></br>
        </div>
        <RiMailOpenFill color="rgb(4, 0, 110)" size="1.3rem" class="dashicon"/>
        <button> Dashboard</button>
        <hr width="80%"></hr>
        <Router>
        <ul>
          <li><SiTheconversation size="1.3rem" class="ul_icon"/> <Link to="/Conversions" class="links"> Conversations</Link></li>
          <li><MdOutlineDisplaySettings size="1.3rem" class="ul_icon" /> <Link to="/Automations" class="links"> Automations</Link></li>
          <li><MdOutlineAnalytics size="1.3rem" class="ul_icon" /> <Link to="/Campaigns" class="links"> Campaigns</Link></li>
          <li><TfiLayers size="1.3rem" class="ul_icon" /> <Link to="/Popup" class="links"> Popup</Link></li>
          <li><PiChatCenteredTextBold size="1.3rem" class="ul_icon" /> <Link to="/Live_Chat" class="links"> Live Chat</Link></li>
          <li><TbChartDonut2 size="1.3rem" class="ul_icon" /> <Link to="/Segments" class="links"> Segments</Link></li>
          <li><LuSettings2 size="1.3rem" class="ul_icon" /> <Link to="/Integrations" class="links"> Integrations</Link></li>
        </ul>

        <Routes>
          <Route path="Conversations" Component={Conversions}></Route>
          <Route path="Automations" Component={Automations}></Route>
          <Route path="Campaigns" Component={Campaigns}></Route>
          <Route path="Popup" Component={Popup}></Route>
          <Route path="Live_Chat" Component={Live_Chat}></Route>
          <Route path="Segments" Component={Segments}></Route>
          <Route path="Integrations" Component={Integrations}></Route>
        </Routes>
        </Router>
        <div class="down_content">
          <img src="icon1.jpg" width="55px" height="55px"></img>
          <div class="down_content_inner">
            <h4>Oguz Yagiz Kara</h4>
            <p>Store Name</p>
          </div>
        </div>
      </aside>
      <div class="verline"></div>
      <section>
          <Content />
      </section>
      </main>
    </body>
  );
}

export default App;