import React, { Component } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import TopBar from "../TopBar/TopBar"

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"

import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar)

class Agenda extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
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
            defaultDate={moment().toDate()}
            defaultView='month'
            events={this.state.events}
            localizer={localizer}
            onEventDrop={this.onEventDrop}
            onEventResize={this.onEventResize}
            resizable
            style={{ height: "50vh", width: "50vw" }}
          />
        </div>
      </div>
    )
  }
}

export default Agenda
