

import React from 'react';


const Heder = () => {
    return (
        <div>

            <div className="sub-heading">

                <div className="time">
                    <p className="timeStyle">9:40</p>
                </div>


                <div className="network">

                    <div>
                        <img className="network-style" src='./img/Cellular Connection.png' />
                    </div>
                    <div>
                        <img className="network-style" src='./img/Wifi.png' />
                    </div>
                    <div>
                        <img className="network-style" src='./img/Battery.png' />
                    </div>

                </div>



            </div>

        </div>
    );
};

export default Heder;