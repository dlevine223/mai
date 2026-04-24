/**
 * GraphQL query fragments and queries.
 *
 * All queries use WPGraphQL types registered via WPCode snippets:
 * - Post, Page, Facility, Resource, Testimonial, Faq
 * - FacilityCategory, FacilityRegion, ResourceCategory
 * - rankMathSeo field on all types (via WPCode snippet ID: 2545)
 */

// ─── Fragments ──────────────────────────────────────────────────────

export const SEO_FRAGMENT = `
  fragment SeoFields on RankMathSeo {
    title
    description
    canonical
    openGraph {
      title
      description
      image {
        sourceUrl
        altText
      }
    }
  }
`;

export const FEATURED_IMAGE_FRAGMENT = `
  fragment FeaturedImageFields on MediaItem {
    sourceUrl
    altText
    mediaDetails {
      width
      height
    }
  }
`;

// ─── Page Queries ───────────────────────────────────────────────────

export const GET_PAGE_BY_SLUG = `
  ${SEO_FRAGMENT}
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
      rankMathSeo {
        ...SeoFields
      }
    }
  }
`;

// ─── Post Queries ───────────────────────────────────────────────────

export const GET_POSTS = `
  ${SEO_FRAGMENT}
  ${FEATURED_IMAGE_FRAGMENT}
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            ...FeaturedImageFields
          }
        }
        rankMathSeo {
          ...SeoFields
        }
      }
    }
  }
`;

// ─── Facility Queries ───────────────────────────────────────────────

export const GET_FACILITIES = `
  query GetFacilities($first: Int = 20, $after: String) {
    facilities(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        content
        facilityCategories {
          nodes {
            name
            slug
          }
        }
        facilityRegions {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_FACILITY_BY_SLUG = `
  ${SEO_FRAGMENT}
  query GetFacilityBySlug($slug: ID!) {
    facility(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      facilityCategories {
        nodes {
          name
          slug
        }
      }
      facilityRegions {
        nodes {
          name
          slug
        }
      }
      rankMathSeo {
        ...SeoFields
      }
    }
  }
`;

// ─── Resource Queries ───────────────────────────────────────────────

export const GET_RESOURCES = `
  query GetResources($first: Int = 20, $after: String) {
    resources(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        resourceCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;
