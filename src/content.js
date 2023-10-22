import "./content.css";
import { BsCalendarMinusFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import MyChart from "./chart";


export default function Content(){
    return(
        <body>
            <div class="item">
                <div class="top_content">
                    <div class="profile">
                    <img src="icon1.jpg" height="60px" width="60px"></img>
                    <div class="gm">
                        <h2>Good Morning Oguz</h2>
                        <p>Here are your stars for Today, 24 Aug 2020</p>
                    </div>
                    </div>
                    <div class="today">
                    <h6><BsCalendarMinusFill size="1rem" color="rgb(4, 0, 110)"/> Today</h6>
                    <p class="comp">compared to</p>
                    <h6>Previous Period <AiOutlineDown size="1rem" /></h6>
                    </div>
                </div>


                <div class="middle_data">
                    <div class="data1">
                        <p>Total Revenue<span class="pos">+12.5%</span></p>
                        <h1>$32,621.72</h1>
                        <p>433 Orders</p>
                    </div>
                    <hr></hr>
                    <div class="data1">
                        <p>Subscribers<span class="pos">+32.5%</span></p>
                        <h1>484,205</h1>
                        <p>$56 Average Order</p>
                    </div>
                    <hr></hr>
                    <div class="data1">
                        <p>Conversations<span class="neg"> -3.4%</span></p>
                        <h1>552,553</h1>
                        <p>5min Average Response Time</p>
                    </div>
                    <hr></hr>
                    <div class="data1">
                        <p>Popup Conversion Rate<span class="pos">+32.5%</span></p>
                        <h1>25%</h1>
                        <p>5% Sales Conversion Rate</p>
                    </div>
                </div>

                <div class="middle">
                    <MyChart />
                </div>


            <div class="last">
                <div class="bottom_data">
                    <div class="bottom_data_navbar">
                        <ul>
                            <li class="nv">Automations</li>
                            <li class="nv">Campaigns</li>
                            <li class="nv">Segments</li>
                            <p class="nv">Last Month <AiOutlineDown size="0.7rem" /></p>
                        </ul>
                    </div>

                    <div class="data2">
                        <img src="cart.jpg" width="60px" height="60px"></img>
                        <div>
                            <h5>Abandoned Cart 7 Days</h5>
                            <p>4024 Sent | 124 Clicks</p>
                        </div>
                        <div class="data2_end">
                            <h5>$5,231</h5>
                            <p>41 Orders | $150 AOV</p>
                        </div>
                    </div>
                    <div class="data2">
                        <img src="cart.jpg" width="60px" height="60px"></img>
                        <div>
                            <h5>Abandoned Cart 7 Days</h5>
                            <p>4024 Sent | 124 Clicks</p>
                        </div>
                        <div class="data2_end">
                            <h5>$5,231</h5>
                            <p>41 Orders | $150 AOV</p>
                        </div>
                    </div>
                    <div class="data2">
                        <img src="cart.jpg" width="60px" height="60px"></img>
                        <div>
                            <h5>Abandoned Cart 7 Days</h5>
                            <p>4024 Sent | 124 Clicks</p>
                        </div>
                        <div class="data2_end">
                            <h5>$5,231</h5>
                            <p>41 Orders | $150 AOV</p>
                        </div>
                    </div>


                </div>

                <div class="gauge">
                    <img src="gauge.png" width="350px" height="auto"></img>
                </div>
            </div>


            </div>
        </body>
    );
}