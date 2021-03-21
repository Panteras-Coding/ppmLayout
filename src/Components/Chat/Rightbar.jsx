import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ConversationItem from "./ConversationItem";

function Rightbar(props){

    return <div className="rightbar">
    <nav id="sidebarRight">
      <div>
        <div className="top-sidebar">
          <h3>MENSAJES</h3>
        </div>
        <Tabs>
          <TabList>
            <Tab>Todos</Tab>
            <Tab>Archivados</Tab>
            <Tab>Activos</Tab>
          </TabList>
      
          <TabPanel>
            <div>
              <h3>GRUPOS</h3>
              <ConversationItem
                img="https://scontent.fmex15-1.fna.fbcdn.net/v/t1.0-9/69876970_2203241076641405_8740217838444216320_n.png?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHXMuns1p2Rll4Jkj8g0hiQ4IiwX0iHfNDgiLBfSId80K0gISgqT7HO-CFFx1q_0mt69MrAfp0WGXD5gOvW6UvO&_nc_ohc=fbEWw5qruWcAX-Je3XP&_nc_ht=scontent.fmex15-1.fna&oh=bdfd4552f4688840096d39496b1ea7a6&oe=607A03E5"
                name="Panteras Coding"
                last_message="Lorem ipsum dolem"
              />
              <ConversationItem
                img="https://static-cdn.jtvnw.net/jtv_user_pictures/496ec308-7ea5-4355-a863-325a11cf5d35-profile_image-300x300.png"
                name="Panteras Gaming"
                last_message="Lorem ipsum dolem"
              />
              <h3>PERSONALES</h3>
              <ConversationItem
                img="https://www.stepstherapy.com.au/wp-content/uploads/2018/10/Yazmin-profile-picture-square.jpg"
                name="Fernanda"
                last_message="Lorem ipsum dolem"
              />
              <ConversationItem
                img="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg"
                name="Esteban"
                last_message="Lorem ipsum dolem"
              />
              <ConversationItem
                img="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                name="Daniel"
                last_message="Lorem ipsum dolem"
              />
              <ConversationItem
                img="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                name="Alex"
                last_message="Lorem ipsum dolem"
              />
              <ConversationItem
                img="https://images.unsplash.com/photo-1606744841792-e92948115a84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80"
                name="Sofía"
                last_message="Lorem ipsum dolem"
              />
              <button id="newChatBtn"><img style={{width:"40px"}} src={require('../../Assets/plus.svg')} id="newChatImg"/></button>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h3>MENSAJES ARCHIVADOS</h3>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h3>PERSONAS ACTIVAS</h3>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </nav>
  </div>
}

export default Rightbar;