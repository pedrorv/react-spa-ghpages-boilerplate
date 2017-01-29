const React = require('react')
const { Link } = require('react-router')

const Home = (props) => {
    return (
        <div>
            <p>Home Component</p>
            <Link to={'/react-spa-ghpages-boilerplate/about'}>About</Link>
        </div>
    )
}

module.exports = Home