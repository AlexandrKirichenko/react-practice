export function Post ({name,removePost, id}) {
    return <h2>{name}
    <button
        onClick={() => removePost(id)}> delete
    </button></h2>
}