const Login =()=>{
    var client_id = process.env.REACT_APP_SPOTIFY_KEY;
    var redirect_uri = 'http://localhost:3000/';

    var scope = 'playlist-modify-private';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);


    // const [user, setUser] = useState({
    //     displayName: '',
    //     imagesUrl: '',
    //     user_id: undefined
    // })
    
    // const getUserData = async (accessToken) => {
    //     try {
    //       const data = await axios
    //         .get(
    //             `https://api.spotify.com/v1/me?access_token=${accessToken}`
    //         )
    //         setUser({ ...user, displayName: data.data.display_name, imagesUrl: data.data.images[0].url, user_id: data.data.id })
    //         console.log(data, `got user data`);
    //     } catch (error) {
    //       console.log('get user data error');
    //     }
    // }

    return (
        <>
            <div>
                <a href={url}>
                    <button>Login</button>
                    </a>
            </div>
        </>
    )
}

export default Login;
export var url;