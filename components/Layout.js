import {connect} from 'react-redux'
import Head from 'next/head'

function mapStateToProps(state) {
  return { ...state }
}

export default connect(mapStateToProps)((props) => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    <div>
      {props.children}
    </div>
  </div>
))

