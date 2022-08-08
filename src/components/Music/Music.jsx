import './Music.css'

const PleerMusic = (props) => {
    return ( 
        <div className="container-music">
            <div className="cover"><img src="https://text-pesni.com/public/img/songs/435346151/1.jpg" alt="" /></div>
            <div className="play"></div>
            <div className="info-music">
                <h3>Земляне - Трава у дома</h3>
                <p>Жанр: Рок</p>
            </div>
        </div>
    )
}

const Music = (props) => {
    return ( 
        <PleerMusic/>
    )
}

export default Music;