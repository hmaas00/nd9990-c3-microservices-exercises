import {Router, Request, Response} from 'express';
import {FeedRouter} from '../../../../udagram-api-feed/src/controllers/v0/feed/routes/feed.router';
import {UserRouter} from './users/routes/user.router';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
