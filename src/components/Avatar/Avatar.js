const Avatar = (props) => {
    const { className = "evw-20 evh-20", url, alt = "" } = props;
    return (
        <div className="ev-avatar">
            <img src={url} className={`objfit-cover rounded-circle mw-100 ${className}`} alt={alt} />
        </div>
    );
};
export default Avatar;