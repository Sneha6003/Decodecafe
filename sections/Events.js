import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React, {useState} from "react"

const Events = () => {
  const [filter, setFilter] = useState(['offline', 'online']);
  const [filterLocation, setFilterLocation] = useState(['ahmedabad', 'rajkot', 'gandhinagar']);
  const filteredItems = expertise.filter(item => filter.includes(item.mode) && filterLocation.includes(item.location));
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Events' /> <br />
            <br />
            <Title title='Past events hosted by DecodeCafe Community' className='title-bg' />
          </div>

         <div className="w-full m-4 p-4 flex justify-between">
          <select onChange={(e) => setFilter(e.target.value.split(','))} className="button-primary" style={{margin:"10px", color:'white'}}>
            <option value="" disabled selected>Mode</option>
            <option value="offline,online">All</option>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>

          <select onChange={(e) => setFilterLocation(e.target.value.split(','))} className="button-primary" style={{margin:"10px", paddingRight: "0px", color:'white'}}>
            <option value="" disabled selected>Location</option>
            <option value="ahmedabad,rajkot,gandhinagar">All</option>
            <option value="rajkot">Rajkot</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="gandhinagar">Gandhinagar</option>
          </select>
        </div>

          <div className='grid-2 py'>
          {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Card data={item} key={item.id} caption={item.post} show={true} path={'events'} date={item.date} />
              ))
            ) : (
              <p>No events found for the selected mode and location.</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Events
