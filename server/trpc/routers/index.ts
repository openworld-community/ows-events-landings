import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
   contact: publicProcedure
      .input(z.object({ email: z.string().email(), telegram: z.string() }).partial())
      .mutation(({ input }) => {
         console.log('received contacts');
         console.log(input);
         return 'ok';
      }),
});

export type AppRouter = typeof appRouter;
