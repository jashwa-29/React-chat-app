import React from 'react';

const Texts = ({ chatperson, setChatperson }) => {
  const users = [
    { name: 'Jane', message: 'How you doing', imgSrc: 'https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829125?k=6&m=530829125&s=612x612&w=0&h=Z76VH4c_W2aJ6UdUnjuCtLssjlFVNwNEns5VVNpH1Mg=' },
    { name: 'Fedrick', message: 'Bye', imgSrc: 'https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg' },
    { name: 'Santhosh', message: 'Bye', imgSrc: 'https://i.pinimg.com/originals/11/6d/a5/116da59d6e483070f72d9a5b09dfd130.jpg' },
    { name: 'Dhinesh', message: 'Bye', imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.jJzaTrSoVyZAa73VMZzxfQAAAA&pid=Api&P=0&h=220' },
    { name: 'Barath', message: 'Bye', imgSrc: 'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg' },
    { name: 'Sam', message: 'Bye', imgSrc: 'https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg' },
    { name: 'Danny', message: 'Bye', imgSrc: 'https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg' },
  ];

  return (
    <div className='main-chat'>
      {users.map((user, index) => (
        <div className="userchat" key={index} onClick={() => setChatperson(user.name)}>
          <img src={user.imgSrc} alt={`${user.name}'s avatar`} />
          <div className="user-chat-info">
            <span>{user.name}</span>
            <p>{user.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Texts;
