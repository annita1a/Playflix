import React, { Fragment, memo, useEffect } from 'react'

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { set_breadcrumb } from '@/store/streamit/actions'
import { useTranslation } from 'react-i18next';



const SingleBlogBreadcrumb = memo(({ type }: { type: any }) => {
    const { t } = useTranslation("common");
    const dispatch = useDispatch()
    // console.log(type)
    useEffect(() => {
        switch (type) {
            case 'audio':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamBlog.black_pearl')}` }))
                break;
            case 'video':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamPrivacy_Policy.cookies_web')}` }))
                break;
            case 'link':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamBlog.birds_of_prey')}`}))
                break;
            case 'quote':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamBlog.saturday_night')}` }))
                break;
            case 'gallery':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamForm.gillian_shares')}` }))
                break;
            default:
                break;
        }
        return () => {
            dispatch(set_breadcrumb({ show: false, name: '' }))
        }
    }, [type])
    return (
        <Fragment>
        </Fragment>
    )
})

SingleBlogBreadcrumb.displayName = "SingleBlogBreadcrumb"
export default SingleBlogBreadcrumb