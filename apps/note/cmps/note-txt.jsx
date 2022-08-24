export class NoteTxt extends React.Component {
    render() {
        
        const { txt } = this.props.info

        return <div className="note-txt">
            {txt}
        </div>
    }
}

// export class CreateNoteTxt extends React.Component{
//     render() {
//         const { onChangeVal } = this.props

//         return <div className="create-note-txt">
//             <textarea type="text"
//             onChange={(ev) => {onChangeVal(ev.target.value)}} 
//             />
//         </div>
//     }
// }