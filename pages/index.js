import {connect} from 'react-redux'
import {setTitle} from '../store'
import Layout from '../components/Layout'

class Index extends React.Component {

  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(setTitle('Redux','koobitor'))

    return {}
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(setTitle('test','asdfsdf'))
  }

  render() {
    const { title } = this.props
    return (
      <Layout>
        <h1>{title}</h1>
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  return { ...state }
}

export default connect(mapStateToProps)(Index)