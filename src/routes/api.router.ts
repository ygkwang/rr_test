import {FastifyInstance} from 'fastify'
import {apiSchema, signupSchema} from '../schema'
import {apiDef, apiSyncUp, preApiNews, preApiSyncUp, preSearchNewLink, preSearchNews, signUp} from "../controllers";

async function apiRouter(fastify: FastifyInstance) {

    fastify.route(
        {
            method: 'GET',
            url: '/active_sync',
            schema: apiSchema, preHandler: preApiSyncUp, handler: apiSyncUp
        })

    fastify.route({
        method: 'GET',
        url: '/search',
        schema: apiSchema, preHandler: preSearchNews,handler: apiSyncUp
    })
    fastify.route({
        method: 'GET',
        url: '/search2',
        schema: apiSchema, preHandler: preSearchNewLink,handler: apiSyncUp
    })
    fastify.route({
        method: 'GET',
        url: '/rank',
        schema: apiSchema, preHandler: preApiNews,handler: apiSyncUp
    })
    fastify.route({
        method: 'GET',
        url: '/oauth',
        schema: apiSchema, handler: apiDef
    })

    fastify.route({
        method: 'POST',
        url: '/signup',
        schema: signupSchema,
        handler: signUp,
    })
}

export default apiRouter
