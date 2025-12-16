import React, { Fragment, memo, useEffect } from 'react'

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { set_breadcrumb } from '@/store/streamit/actions'
import { useTranslation } from 'next-i18next';

const GridPageBreadCrumb = memo(({ type }: { type: any }) => {
    const { t } = useTranslation("common");
    const dispatch = useDispatch()
    useEffect(() => {
        switch (type) {
            case '/blogs/grid/one-column':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamPages.1_column_blog')}` }))
                break;
            case '/blogs/grid/two-column':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamPages.2_column_blog')}` }))
                break;
            case '/blogs/grid/three-column':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamPages.3_column_blog')}` }))
                break;
            case '/blogs/grid/four-column':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamPages.4_column_blog')}` }))
                break;

            default:
                dispatch(set_breadcrumb({ show: true, name: 'Grid' }))
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

GridPageBreadCrumb.displayName = "GridPageBreadCrumb"
export default GridPageBreadCrumb