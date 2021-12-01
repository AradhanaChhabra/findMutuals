import User from './User';

class AppModule {
  users: User[];
  graph: number[][];
  hasOutput: boolean;
  output: number[][];
  alert: {
    hasAlert: boolean;
    variant: string;
    description: string;
  };
  searchedUsers: string[];
  onNewUserEntry: (user: User) => void;
  onNewRelationshipEntry: (user1: string, user2: string) => void;
  onSearch: (user1: string, user2: string) => void;

  constructor(
    users: User[],
    graph: number[][],
    hasOutput: boolean,
    output: number[][],
    alert: {
      hasAlert: boolean;
      variant: string;
      description: string;
    },
    searchedUsers: string[],
    onNewUserEntry: (user: User) => void,
    onNewRelationshipEntry: (user1: string, user2: string) => void,
    onSearch: (user1: string, user2: string) => void
  ) {
    this.users = users;
    this.graph = graph;
    this.hasOutput = hasOutput;
    this.output = output;
    this.alert = alert;
    this.searchedUsers = searchedUsers;
    this.onNewUserEntry = onNewUserEntry;
    this.onNewRelationshipEntry = onNewRelationshipEntry;
    this.onSearch = onSearch;
  }
}
export default AppModule;
