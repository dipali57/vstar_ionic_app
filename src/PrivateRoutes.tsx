import { Redirect, Route } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { PostTypePage } from './pages/Post/PostTypePage/PostTypePage';
import { PostRecipientPage } from './pages/Post/PostRecipientPage/PostRecipientPage';
import { CompilePostPage } from './pages/Post/CompilePostPage/CompilePostPage';
import { VayanaPage } from './pages/VayanaPage/VayanaPage';
import { FeedbackPage } from './pages/FeedbackPage/FeedbackPage';
import { TrendingPage } from './pages/TrendingPage/TrendingPage';
import { HelpPage } from './pages/HelpPage/HelpPage';
import { LeaderBoardPage } from './pages/LeaderBoard/LeaderBoardPage';
import { AboutPage } from './pages/AboutPage/AboutPage';

export const PrivateRoutes: React.FC = () => {
  return (
    <>
      <Redirect exact path="/" to="/home" />
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact={true} path="/post/type">
        <PostTypePage />
      </Route>
      <Route exact={true} path="/post/recipient">
        <PostRecipientPage />
      </Route>
      <Route exact={true} path="/post/compile">
        <CompilePostPage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route exact={true} path="/vayana">
        <VayanaPage />
      </Route>
      <Route exact={true} path="/feedback">
        <FeedbackPage />
      </Route>
      <Route exact={true} path="/trending">
        <TrendingPage />
      </Route>
      <Route exact={true} path="/help">
        <HelpPage />
      </Route>
      <Route exact={true} path="/leader-board">
        <LeaderBoardPage />
      </Route>
      <Route exact={true} path="/about-vstar">
        <AboutPage />
      </Route>
    </>
  );
};
