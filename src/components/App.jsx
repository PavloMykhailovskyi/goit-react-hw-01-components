import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { TransactionHistory } from "./transactions/TransactionHistory";
import { FriendsList } from "./friends/FriendsList";
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json"
import transactions from "../transactions.json";



export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
