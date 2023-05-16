function User(username) {
    this.username = username;
  
    this.updateUsername = (newName) => {
      this.username = newName;
    };
  }
  
  const user1 = new User('kirandash');
  const user2 = new User('bgwebagency');
  
  user1.updateUsername('openai');
  user2.updateUsername('gpt-3');
  
  console.log(user1.username + user2.username);
  