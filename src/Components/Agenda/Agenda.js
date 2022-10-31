import React, { Component } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"

import TopBar from "../TopBar/TopBar"

import moment from "moment"
import "moment/locale/tr"

import "./Agenda.css"

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
import { defaultMessages } from "./defaultMessages"

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar)

class Agenda extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(6, "hours").toDate(),
        title: "Aylık Kontrol",
      },
    ],
  }

  onEventResize = (data) => {
    const { start, end } = data
    this.setState((state) => {
      state.events[0].start = start
      state.events[0].end = end
      return { events: [...state.events] }
    })
  }

  onEventDrop = ({ event, start, end, isAllDay }) => {
    const updatedEvent = { ...event, start, end, isAllDay }
    this.setState({ events: [updatedEvent] })
  }

  render() {
    return (
      <div className='flex flex-col h-full w-full'>
        <TopBar />
        <div className='flex rounded-tl-3xl  bg-[#f9faff] items-center justify-center h-full w-full'>
          <DnDCalendar
            min={moment("8:00 AM", "h:mm A")}
            max={moment("21:00 pM", "h:mm A")}
            messages={defaultMessages}
            defaultDate={moment().toDate()}
            defaultView='week'
            events={this.state.events}
            localizer={localizer}
            onEventDrop={this.onEventDrop}
            onEventResize={this.onEventResize}
            resizable
            style={{ height: "80vh", width: "80vw" }}
          />
        </div>
      </div>
    )
  }
}

export default Agenda
