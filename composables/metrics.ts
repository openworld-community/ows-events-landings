import { nanoid } from 'nanoid';
import { defu } from 'defu';

export const UserTrackerIDKey = 'user_tracker_id';
/**
 * Set cookie with unique ID to track individual users between page visits
 * @returns user ID
 */
export function useTrackUser() {
   return useState(UserTrackerIDKey, () => {
      const cookie = useCookie(UserTrackerIDKey);
      cookie.value ??= nanoid();
      return cookie.value;
   }).value;
}

/**
 * Global state with session ID to keep track of
 * @returns session ID
 */
function useTrackSession() {
   return useState('user_track_interaction_sequence', () => nanoid()).value;
}

export function useTrackInteraction(
   interaction: string,
   props?: NonNullable<Parameters<typeof useTrackEvent>[1]>['props']
) {
   return useTrackEvent(interaction, {
      props: defu({ sessionID: useTrackSession(), timestamp: Date.now() }, props),
   });
}
