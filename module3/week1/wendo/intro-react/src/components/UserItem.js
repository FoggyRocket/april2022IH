function UserItem({username,github,...props}) {
  return (
    <div>
      <p>User: {username}</p>
      <a href={github}>
        <button>go to my github</button>
      </a>
    </div>
  );
}


export default UserItem;