import './style.css';

// courtesy of codepen.io

function LoadingComponent() {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <div className="r1"></div>
                <div className="r2"></div>
                <div className="r3"></div>
                <div className="r4"></div>
                <div className="r5"></div>
            </div>
        </div>
    );
}

export default LoadingComponent;