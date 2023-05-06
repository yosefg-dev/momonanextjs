import 'bootstrap/dist/css/bootstrap.css';

export default function Component({ cake }) {
    return (
        <div class="card">
            <img src="/momona.jpeg" class="card-img-top" alt="company" height={300} />
            <div class="card-body">
                <h5 class="card-title">Next JS Developer</h5>
                <p class="card-text">Have good skill on react js, <br />node js and next js<br />
                    with MVC architechture of developement<br />
                    methodology. Working on SOLID principle is a plas!!</p>
                <a href="#" class="btn btn-primary">Detail</a>
            </div>
        </div>
    )
}