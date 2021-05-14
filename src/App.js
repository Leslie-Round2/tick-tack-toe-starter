import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import Game from './Game';
function App() {
return (
<div>
<h1>Hello from AWS Amplify</h1>
<Game />,

  <AmplifySignOut />
</div>
)
}
export default withAuthenticator(App)