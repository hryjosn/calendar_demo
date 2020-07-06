import React, { Component } from 'react';
import './Calendar.scss'
import { Button } from 'element-react';
import { formatDate, addDays } from '../../util';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let hours = [0, 1, 7, 8, 9, 10, 11, 21, 22, 23];


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            week: 0
        }
    }

    render() {
        const { week } = this.state

        const getDateNum = (nextDay) => {
            const today = new Date()
            let dateNum = addDays(today, nextDay).getDate()
            if (dateNum < 10) {
                dateNum = "0" + dateNum
            }
            return dateNum
        }
        return (
            <div>
                <h3 className={"section-title"}>
                    <span>
                        Available times
                    </span>
                </h3>
                <div>
                    <Button disabled={week === 0} onClick={() => {
                        this.setState({ week: week - 1 })
                    }}>
                        <i className="el-icon-arrow-left"> </i>
                    </Button>
                    <Button style={{ marginLeft: 0, marginRight: 10 }} onClick={() => {
                        this.setState({ week: week + 1 })
                    }}>
                        <i className="el-icon-arrow-right" style={{ fontWeight: 400 }}> </i>
                    </Button>
                    <span>
                        {formatDate(addDays(new Date(), week * 7))}
                    </span>
                </div>
                <div className={"at-column-box"}>
                    {DAYS.map((item, index) => {
                        const pastDay = week === 0 && new Date().getDay() > index
                        return (
                            <div className={`root ${pastDay ? 'invalidDay' : 'validDay'}`}>
                                <div className={"title-box"}>
                                    <div>
                                        {item}
                                    </div>
                                    <div>
                                        {getDateNum(index - new Date().getDay() + week * 7)}
                                    </div>
                                </div>
                                <div className={"time-box"}>
                                    {
                                        hours.map((item, index) => {
                                            const randomNum = Math.floor(Math.random() * hours.length);
                                            return (
                                                <>
                                                    <div className={"time-list"}>
                                                        <div className={`time ${randomNum === index && 'validTime'}`}>
                                                            {item} : 00
                                                        </div>
                                                        <div className={`time ${randomNum === index && 'validTime'}`}>
                                                            {item} : 30
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    }

                                </div>
                            </div>)
                    })}
                </div>
            </div>
        );
    }
}


export default Calendar;
