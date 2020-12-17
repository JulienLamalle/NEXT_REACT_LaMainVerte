import React, { useState, useEffect } from "react";
import {findUserDatas} from "../../../requests/user";
import {getFollowedGardenAndRelatedData} from "../../../requests/gardens";
import {Link} from "react-router-dom";
import GardenCard from '../../../components/GardenCard';
import { useSelector } from "react-redux";

const UserGardens = ({user}) => {
    const [gardens, setGardens] = useState([]);
    const [current_user, setCurrentUser] = useState(useSelector(state=>state.current_user));

    useEffect(() => {

        const fetchPageDatas = async () => {
    
          const fetchUser = await findUserDatas(user.id);
          
          const userGardens = await getFollowedGardenAndRelatedData(
            fetchUser.gardens
          );
          setGardens(userGardens)
        };
    
        fetchPageDatas();
      }, [])

    return (
        <section id="user-gardens" className="flex flex-col">
            <div className="radius bg-light-brown shadow-neomorph p-4 my-5 flex justify-between">
              { current_user && current_user.id == user.id?
                  <>
                    <h1>Mes jardins</h1>
                    <Link to="/gardens/new" id = "create-garden">
                        Créer un nouveau jardin
                    </Link>
                  </>
                :
                  <h1>Jardins de {user.username}</h1>
              }
           
            </div>

            <div className={gardens?.length > 1? "gardens overflow-y-scroll" : "gardens"}>
            { gardens?.map((garden) => (
                <GardenCard
                id = {garden.id}
                name = {garden.name}
                picture_url = {garden.picture_url}
                picture_opacity = {garden.picture_opacity}
                user = {user}
                climate = {garden.climate}
                location = {garden.location}
                garden_type = {garden.garden_type}
                created_at = {garden.created_at}
                updated_at = {garden.updated_at}
            />
            ))

            }
            </div>
        
        </section>
    )
}

export default UserGardens;