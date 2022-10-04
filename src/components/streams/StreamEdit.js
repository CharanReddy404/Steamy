import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

// const StreamEdit = (props) => {

//     useEffect(() => {
//         props.fetchStream(props.match.params.id)
//     }, []);

//     console.log(props);

//     const renderEdit = () => {
//         if (!props.stream) {
//             return (<div>Loading..</div>);
//         }

//         return (<div>{props.stream.title}</div>);
//     }


//     return (
//         <>
//             {renderEdit()}
//         </>
//     );
// };

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return (<div>Loading..</div>);
        }

        return (<div>{this.props.stream.title}</div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);