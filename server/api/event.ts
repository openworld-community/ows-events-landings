import { z } from 'zod';
import { JSONparse } from '../../utils';
import { UserTrackerIDKey } from '../../composables/metrics';

/**
 * Type definition taken [from](https://github.com/plausible/plausible-tracker/blob/c0b87d997d839938c23023d35bac0d6683635bbc/src/lib/request.ts#L6C5-L6C5) */
type PlausibleEvent = {
   readonly n: string;
   readonly u: Location['href'];
   readonly d: Location['hostname'];
   readonly r: Document['referrer'] | null;
   readonly w: Window['innerWidth'];
   readonly h: 1 | 0;
   readonly p?: string;
};
const plausibleEventSchema = z.object({
   n: z.string(),
   u: z.string(),
   d: z.string(),
   r: z.string().nullable(),
   w: z.number(),
   h: z.literal(0).or(z.literal(1)),
   p: z.string().optional(),
});

export default defineEventHandler(async event => {
   const body = await readBody<unknown>(event);
   const userID = getCookie(event, UserTrackerIDKey);
   if (!userID) return createError({ statusCode: 403 });

   const parsedBody = plausibleEventSchema.safeParse(body);
   if (!parsedBody.success) return createError({ statusCode: 400 });

   return registerEvent(userID, parsedBody.data);
});

function registerEvent(userID: string, event: PlausibleEvent) {
   if (event.p) {
      const parsedProps = JSONparse(event.p);
      if (!parsedProps.success) return createError({ statusCode: 400 });
   }
   return 'ok';
}
