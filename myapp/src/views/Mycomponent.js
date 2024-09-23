import React from 'react';
class Mycomponent extends React.Component {
    handlealterclick = () => {
        alert('click me')
    }
    channgetext = (e) => {
        console.log('haha')
    }
    stare = (e) => {
        console.log('dmm')
    }
    render() {

        return (
            <>
                <div>
                    <input placeholder='Nhap ngay ten vao ...' type="text" onChange={(e) => this.channgetext(e)} />
                </div>
                <div>                   <button onClick={() => this.handlealterclick()}>An nut nay</button></div>
            </>
        )
    }
}
export default Mycomponent;