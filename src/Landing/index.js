import { useHistory  } from 'react-router-dom';

const Landing = () => {
    const history = useHistory()

    return (<div>
        <h2>Landing page</h2>
        <h6 onClick={() => history.push('/dashboard')}>Go to dashboard</h6>
    </div>)
};

export default Landing;