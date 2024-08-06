import './FeedPage.css';

const FeedPage = () => {
    const feeds = [
        {
            id: 1,
            name: 'John Doe',
            profilePic: 'https://randomuser.me/api/portraits',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            postPic: 'https://source.unsplash.com/random',
            likes: 10,
            comments: 5,
            shares: 2,
            time: '1 hour ago',
            liked: false,
            saved: false,
            commented: false,
            shared: false,
        },
        {
            id: 2,
            name: 'Jane Doe',
            profilePic: 'https://randomuser.me/api/portraits',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            postPic: 'https://source.unsplash.com/random',
            likes: 10,
            comments: 5,
            shares: 2,
            time: '1 hour ago',
            liked: false,
            saved: false,
            commented: false,
            shared: false,
        },
        {
            id: 3,
            name: 'John Doe',
            profilePic: 'https://randomuser.me/api/portraits',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            postPic: 'https://source.unsplash.com/random',
            likes: 10,
            comments: 5,
            shares: 2,
            time: '1 hour ago',
            liked: false,
            saved: false,
            commented: false,
            shared: false,
        },
        {
            id: 4,
            name: 'Jane Doe',
            profilePic: 'https://randomuser.me/api/portraits',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            postPic: 'https://source.unsplash.com/random',
            likes: 10,
            comments: 5,
            shares: 2,
            time: '1 hour ago',
            liked: false,
            saved: false,
            commented: false,
            shared: false,
        },
        {
            id: 5,
            name: 'John Doe',
            profilePic: 'https://randomuser.me/api/portraits',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            postPic: 'https://source.unsplash.com/random',
            likes: 10,
            comments: 5,
            shares: 2,
            time: '1 hour ago',
            liked: false,
            saved: false,
            commented: false,
            shared: false,
        },
        {
            id: 6,
            name: 'Jane Doe',
            profilePic: 'https://randomuser.me/api/portraits',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            postPic: 'https://source.unsplash.com/random',
            likes: 10,
            comments: 5,
            shares: 2,
            time: '1 hour ago',
            liked: false,
            saved: false,
            commented: false,
            shared: false,
        },
        {
            id: 7,
            name: 'John Doe',
            profilePic: 'https://randomuser.me/api/portraits',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            postPic: 'https://source.unsplash.com/random',
            likes: 10,
            comments: 5,
            shares: 2,
            time: '1 hour ago',
            liked: false,
            saved: false,
            commented: false,
            shared: false,
        },
        {
            id: 8,
            name: 'Jane Doe',
            profilePic: 'https://randomuser.me/api/portraits',
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            postPic: 'https://source.unsplash.com/random',
            likes: 10,
            comments: 5,
            shares: 2,
            time: '1 hour ago',
            liked: false,
            saved: false,
            commented: false,
            shared: false,
        },
    ];
  return (
    <div>
        {feeds.map((feed) => (
            <div key={feed.id} className='feedContainer'>
            <div className='feedHeader'>
                <img src={feed.profilePic} alt='profile' className='feedProfilePic' />
                <div className='feedName'>{feed.name}</div>
            </div>
            <div className='feedPost'>{feed.post}</div>
            <img src={feed.postPic} alt='post' className='feedPostPic' />
            <div className='feedFooter'>
                <div className='feedLike' onClick={() => {}}>
                <img src='https://img.icons8.com/material-outlined/24/000000/like--v1.png' alt='like' />
                <div>{feed.likes}</div>
                </div>
                <div className='feedComment' onClick={() => {}}>
                <img src='https://img.icons8.com/material-outlined/24/000000/topic.png' alt='comment' />
                <div>{feed.comments}</div>
                </div>
                <div className='feedShare' onClick={() => {}}>
                <img src='https://img.icons8.com/material-outlined/24/000000/share.png' alt='share' />
                <div>{feed.shares}</div>
                </div>
                <div className='feedTime'>{feed.time}</div>
            </div>
            </div>
        ))}
    </div>
  )
};

export default FeedPage;