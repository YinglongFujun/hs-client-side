import cookie from 'react-cookies';

export default (subdomain='api', path='/', needAuth=true) => {
    // Get the user's oauth-token
    let tail = "";
    const token = cookie.load('oauth-token');
    if(needAuth){
        tail = `&oauth_token=${token}&bypass=true`;
    }
    if(!subdomain.endsWith('.')){
        subdomain += '.';
    }

    if(subdomain === '$NA.'){
        subdomain = "";
    }

    if(process.env.NODE_ENV === 'production'){
        return (`https://${subdomain}hoovessound.ml${path}${tail}`);
    }else{
        return (`http://${subdomain}hoovessound.me:3000${path}${tail}`);
    }
}