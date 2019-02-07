
export const SOURCE_TYPES = {
    FACEBOOK: 'FACEBOOK',
    GITHUB: 'GITHUB',
    GOOGLE: 'GOOGLE',
    GRAVATAR: 'GRAVATAR',
    ICON: 'ICON',
    SKYPE: 'SKYPE',
    TWITTER: 'TWITTER',
    SRC: 'SRC'
};

// maps the unified source attribute to the appropriate value that is used by each source
// instance to fetch is data
export const SOURCE_TYPE_SRC_MAPPING = {
    [SOURCE_TYPES.FACEBOOK]: 'facebookId',
    [SOURCE_TYPES.GITHUB]: 'githubHandle',
    [SOURCE_TYPES.GOOGLE]: 'googleId',
    [SOURCE_TYPES.GRAVATAR]: 'email',
    [SOURCE_TYPES.SKYPE]: 'skypeId',
    [SOURCE_TYPES.ICON]: 'icon',
    [SOURCE_TYPES.SRC]: 'src'
};